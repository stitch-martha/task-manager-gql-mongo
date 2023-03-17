import { useQuery } from "@apollo/client"
import { USERS } from "../Apollo/Queries/users"

export default function Users(): JSX.Element {
  const { data }  = useQuery(USERS)

  return <div>{data?.get_users?.map((u: any) => <p key={u.id}>{u.name}</p>)}</div>
}