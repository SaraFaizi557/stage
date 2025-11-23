import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";

export default function LogIn() {
  return (

    <div className='h-screen w-full p-3 flex flex-col gap-5 items-center justify-center'>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl flex items-center justify-center">Log in</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" placeholder="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full cursor-pointer">
            Log in
          </Button>
        </CardFooter>
      </Card>
      <div className="flex items-center justify-center">
        <CardDescription>
          Don't have an account?
        </CardDescription>
        <CardAction>
          <Button variant="link" className='cursor-pointer'>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </CardAction>
      </div>
    </div>
  )

}