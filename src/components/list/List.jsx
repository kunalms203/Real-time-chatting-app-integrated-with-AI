import "./list.css"
import Userinfo from "./userinfo/Userinfo"
import Userlist from "./userlist/Userlist"
const List = () => {
  return (
    <div className='list'>
      <Userinfo />
      <Userlist />
    </div>
  )
}

export default List