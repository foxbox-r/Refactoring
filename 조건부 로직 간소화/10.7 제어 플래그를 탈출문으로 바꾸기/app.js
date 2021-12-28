for (const p of people) {
  if (!found) {
    if (p === "조커") {
      sendAlert();
      found = true;
    }
  }
}

for (const p of people) {
  if (p === "조커") {
    sendAlert();
    break;
  }
}
