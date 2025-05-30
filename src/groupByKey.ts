type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const keyValue = item[key] as unknown as string; 
    if (!acc[keyValue]) {
      acc[keyValue] = []; 
    }
    acc[keyValue].push(item); 
    return acc;
  }, {} as GroupsMap<T>);
}
