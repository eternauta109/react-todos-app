import { LISTS_URL } from "../config"

console.log('lists service',LISTS_URL)

export const getLists = async () => {
  return fetch(LISTS_URL).then((res) => res.json());
};

export const removeList = async (list) => {
  return fetch(LISTS_URL + "/" + list.id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => res);
};

export const newList = async (list) => {
  return fetch(LISTS_URL, {
    method: "POST",    
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(list),
  })
    .then((res) => res.json())
    .then((res) => res);
};

