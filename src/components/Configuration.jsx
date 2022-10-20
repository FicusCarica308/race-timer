function Configuration(props) {
  return (
    <form>
      <label>Length of Timer:</label>
      <input type="text" value={props.length} onChange={(e) => { props.setLength(e.target.value); /* props.setTimerStatus(false) */ } }/>
      <br />
      <label>Number of Contestants:</label>
      <input type="number" value={props.numPlayers} onChange={(e) => props.setNumPlayers(e.target.value)} />
    </form>
  );
}
export default Configuration;
