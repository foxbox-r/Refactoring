let result;

if (availableResources.length === 0) {
  result = createResource();
  allocatedResource(result);
} else {
  result = availableResources.pop();
  allocatedResource(result);
}

return result;
