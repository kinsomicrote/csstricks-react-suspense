import { createResource } from 'simple-cache-provider';

const sleep = (duration) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, duration)
    })
  }

const loadProfiles = createResource(async () => {
    sleep(3000)
    const res = await fetch(`https://randomuser.me/api/?results=15`);
    return await res.json();
});

export default loadProfiles