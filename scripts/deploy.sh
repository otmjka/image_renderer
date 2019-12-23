#!/bin/bash -vx
if [[ "$ENV" != "prod" && "$ENV" != "staging" ]]; then
    echo "The env \"$ENV\" is not supported"
    exit 1;
fi

cd "$(dirname "$0")"

rm -rf ../k8s/generated_manifests/base-service-deployment
helm template \
  --name base-service-deployment \
  --output-dir ../k8s/generated_manifests \
  --values ../k8s/values/${ENV}.yaml \
  --set nameOverride=base-service \
  --set-string image.tag=${TAG_NAME} \
../k8s/charts/base-service-deployment

rm -rf ../k8s/generated_manifests/base-service-service
helm template \
  --name base-service-service \
  --output-dir ../k8s/generated_manifests \
  --values ../k8s/values/${ENV}.yaml \
  --set nameOverride=base-service \
  --set-string image.tag=${TAG_NAME} \
../k8s/charts/base-service-service

kubectl apply --recursive -f ../k8s/generated_manifests/base-service-deployment
kubectl apply --recursive -f ../k8s/generated_manifests/base-service-service
