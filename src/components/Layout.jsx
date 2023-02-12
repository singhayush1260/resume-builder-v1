
const Layout=(props)=>{
    return(
    <body>
    <div class="body">
    <div class="main-container">
  {props.children}
    </div>
    </div>
    </body>
    )
}
export default Layout;