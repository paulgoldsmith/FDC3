import { BasicDirectory } from '@finos/fdc3-web-impl/src/directory/BasicDirectory';
import { DirectoryApp } from '@finos/fdc3-web-impl/src/directory/DirectoryInterface';

async function loadRemotely(u: string) {
  const response = await fetch(u);
  return await response.json();
}

async function load(url: string): Promise<DirectoryApp[]> {
  if (url.startsWith('http')) {
    return await loadRemotely(url).then(convertToDirectoryList);
  } else {
    return await loadRemotely(window.location.origin + url).then(convertToDirectoryList);
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const convertToDirectoryList = (data: any) => {
  return data.applications as DirectoryApp[];
};

export class FDC3_2_1_JSONDirectory extends BasicDirectory {
  constructor() {
    super([]);
  }

  async load(url: string) {
    this.allApps = await load(url);
  }
}
