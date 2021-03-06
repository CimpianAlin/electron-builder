declare module "asar-electron-builder" {
  import { Stats } from "fs"

  interface AsarFileInfo {
    offset: number
    size: number
  }

  interface AsarOptions {
    unpack?: string
    unpackDir?: string
    dot?: boolean

    ordering?: string | null
  }

  export function listPackage(archive: string): Array<string>

  // followLinks defaults to true
  export function statFile(archive: string, filename: string, followLinks?: boolean): AsarFileInfo | null

  // export function createPackageFromFiles(src: string, dest: string, filenames: Array<string>, metadata: { [key: string]: AsarFileMetadata;}, options: AsarOptions, callback: (error?: Error) => void): void
}