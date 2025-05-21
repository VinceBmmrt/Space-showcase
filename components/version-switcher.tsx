"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface VersionSwitcherProps {
  versions: string[]
  defaultVersion: string
}

export function VersionSwitcher({ versions, defaultVersion }: VersionSwitcherProps) {
  return (
    <Select defaultValue={defaultVersion}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Sélectionner une version" />
      </SelectTrigger>
      <SelectContent>
        {versions.map((version) => (
          <SelectItem key={version} value={version}>
            Version {version}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
