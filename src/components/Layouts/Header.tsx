"use client"

import { PlusIcon } from "lucide-react"
import { Button } from "../ui/button"
import { FC } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    
    const router = useRouter()
	const {data: session} = useSession()


    const navCreateJobPage = () => router.push('/post-job')

  return (
	<div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
			<div>
				<div>Company</div>
				<div className="font-semibold">{session?.user.name}</div>
			</div>
			<div>
				<Button
				 	onClick={navCreateJobPage}
					className="py-3 px-6 rounded-sm"
				>
					<PlusIcon className="mr-2 w-4 h-4" />
					Post a job
				</Button>
			</div>
		</div>
  )
}

export default Header
