import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function PageComponent() {
    const { data: session } = useSession();
    return(
        <div>
            {session ? <div/> :
            (
                <Link href="/sign-up">
                      <Button
                        variant="outline"
                        className=" bg-red-600 text-white text-2xl hover:bg-white hover:text-red-600"
                      >
                        Sign Up →
                      </Button>
                    </Link>
            )}
        </div>
    )
}