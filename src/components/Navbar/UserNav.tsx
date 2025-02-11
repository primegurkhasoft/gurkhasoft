import Link from "next/link"
import { Button } from "@/utils/button"

export function UserNav() {
  return (
    <div className="flex items-center gap-4">
      <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
        Contact
      </Link>
      <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
        Log in
      </Link>
      <Button>Sign up</Button>
    </div>
  )
}

