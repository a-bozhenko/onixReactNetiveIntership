export const prepareSections = (data) => {
  const sections = {};

  data.forEach((item) => {
    if (
      typeof sections[item.type] === 'object'
    ) {
      sections[item.type].push(item);
    } else {
      sections[item.type] = [item];
    }
  });

  return Object.entries(sections).map((arr) => ({ name: arr[0], data: arr[1] }));
};
