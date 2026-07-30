export default function StatusBar() {
  const year = new Date().getFullYear();

  return (
    <div className="status-bar">
    <span className="status-left">
  VS CODE PORTFOLIO

</span>


      <span className="status-right">
        Vitaliy Zui © • {year}
      </span>
    </div>
  );}