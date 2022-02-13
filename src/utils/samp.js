import os from "os";
import { promises as fs } from "fs";
import { Buffer } from "buffer";
import { dialog } from "electron";

const FSREAD_ERROR = `
Better SA-MP could not find the list of favorite servers in your Documents folder. 

Please go to the "Documents" directory "/Documents/GTA San Andreas User Files/SAMP/" and check if the file "USERDATA.dat" exists. 

Better SA-MP will continue to work, but your favorite SA-MP servers will not be available.
`;

export async function getServers() {
  const pathToDat = `${os.homedir()}\\Documents\\GTA San Andreas User Files\\SAMP\\USERDATA.DAT`;
  let Servers = [];

  let bytesOffset = 0;

  const text = await fs.readFile(pathToDat).catch(() => {
    dialog.showErrorBox("Better SA-MP Error", FSREAD_ERROR);
    return Servers;
  });
  const data = Buffer.from(text);
  bytesOffset += 8;
  const ServersCount = data.readUInt32LE(bytesOffset);

  for (let i = 0; i < ServersCount; i++) {
    const IPLength = data.readUInt32LE((bytesOffset += 4));
    const IP = data
      .slice((bytesOffset += 4), (bytesOffset += IPLength))
      .toString();

    const port = data.readUInt32LE(bytesOffset);

    const HostnameLength = data.readUInt32LE((bytesOffset += 4));
    const name = data
      .slice((bytesOffset += 4), (bytesOffset += HostnameLength))
      .toString();

    const PasswordLength = data.readUInt32LE(bytesOffset);
    const password = data
      .slice((bytesOffset += 4), (bytesOffset += PasswordLength))
      .toString();

    const RCONLength = data.readUInt32LE(bytesOffset);
    const RCON = data
      .slice(bytesOffset, (bytesOffset += RCONLength))
      .toString();

    Servers.push({ IP, port, name, password, RCON });
  }
  return Servers;
}
