let result;

if (availableResources.length === 0) {
  result = createResource();
} else {
  result = availableResources.pop();
}

allocatedResource(result);

return result;
