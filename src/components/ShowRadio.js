const ShowRadio = (props) => {
  const sortFunc = (e) => {
    props.sortFuncParent(e.target.value);
  };
  return (
    <div style={{ marginTop: "2rem" }}>
      <input type="radio" value="id" name="sort" id="r1" onClick={sortFunc} />
      <label htmlFor="r1" style={{ marginLeft: "-10rem" }}>
        Sort By ID (Descending)
      </label>
      <br />
      <input
        type="radio"
        value="title"
        name="sort"
        id="r2"
        onClick={sortFunc}
      />

      <label htmlFor="r2" style={{ marginLeft: "-10rem" }}>
        Sort By Title (Ascending)
      </label>
    </div>
  );
};

export default ShowRadio;
