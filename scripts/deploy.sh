#!/bin/bash -vx
if [[ "$ENV" != "prod" && "$ENV" != "staging" ]]; then
    echo "The env \"$ENV\" is not supported"
    exit 1;
fi

cd "$(dirname "$0")"

rm -rf ../k8s/generated_manifests/image-renderer-deployment
helm template \
  --name image-renderer-deployment \
  --output-dir ../k8s/generated_manifests \
  --values ../k8s/values/${ENV}.yaml \
  --set nameOverride=image-renderer \
  --set-string image.tag=${TAG_NAME} \
../k8s/charts/image-renderer-deployment

rm -rf ../k8s/generated_manifests/image-renderer-service
helm template \
  --name image-renderer-service \
  --output-dir ../k8s/generated_manifests \
  --values ../k8s/values/${ENV}.yaml \
  --set nameOverride=image-renderer \
  --set-string image.tag=${TAG_NAME} \
../k8s/charts/image-renderer-service

kubectl apply --recursive -f ../k8s/generated_manifests/image-renderer-deployment
kubectl apply --recursive -f ../k8s/generated_manifests/image-renderer-service
