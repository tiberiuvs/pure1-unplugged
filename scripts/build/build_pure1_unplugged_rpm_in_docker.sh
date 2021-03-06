#!/usr/bin/env bash

set -ex

SCRIPT_DIR=$(dirname "$0")
REPO_ROOT=${SCRIPT_DIR}/../..
VERSION=$(${REPO_ROOT}/scripts/generate_version.sh ${REPO_ROOT})

${REPO_ROOT}/scripts/print_console_label.sh "Building pure1-unplugged rpm "

# Use realpath for this so we can map it into a container
HOST_RESULTS_DIR=${REPO_ROOT}/build/rpm
CONTAINER_REPO_ROOT=/pure1-unplugged

docker run \
    --rm \
    --privileged \
    -u $(id -u):$(id -g) \
    -v $(realpath ${REPO_ROOT}):${CONTAINER_REPO_ROOT} \
    lorax-build:${VERSION} \
    ${CONTAINER_REPO_ROOT}/scripts/build/build_pure1_unplugged_rpm.sh


echo "Build artifacts are in: ${HOST_RESULTS_DIR}"
