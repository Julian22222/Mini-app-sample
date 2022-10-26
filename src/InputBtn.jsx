import { useState } from "react";

const InputBtn = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState(["Lasagna", "Tomato Soup"]);

  const DeleteButton = () => {
    return (
      <button
        // key={item}
        // list={list}
        // setList={setList}
        className="DelBtn"
        onClick={(event) => {
          event.preventDefault();
          setList((current) => {
            const allArray = [...current];
            let index = allArray.indexOf(item);

            allArray.splice(index, 1);

            return allArray;
          });
        }}
      >
        delete
      </button>
    );
  };

  return (
    <>
      <input
        className="main"
        // list={list}
        // setList={setList}
        id="input"
        value={item} //assign any inserted input to the value// first input field when refreshing web page
        onChange={(event) => {
          return setItem(event.target.value); //allow to inert the test and update the list
        }}
      ></input>
      <button
        className="btn"
        onClick={(event) => {
          event.preventDefault();
          console.log(document.getElementById("input").value);
          setList((current) => {
            //current=== ["to clean", "do shopping", "have a walk"]
            //add new item to the current list
            return [...current, item]; // item-inserted value in input field(line 51), dont use- document.getElementById("input").value
          });
          setItem("");
        }}
        // item={item}
      >
        add new dish
      </button>

      <ul>
        {list.map((item) => {
          return (
            <li key={item} className="list1">
              {item}
              <DeleteButton />
              <img
                className="pcs"
                key={item}
                src={
                  item == "Lasagna"
                    ? "https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550-500x375.jpg"
                    : item == "Honey Garlic Salmon"
                    ? "https://hips.hearstapps.com/delish/assets/17/39/1506456157-delish-honey-garlic-glazed-salmon-1.jpg"
                    : item == "Tomato Soup"
                    ? "https://static01.nyt.com/images/2018/09/10/dining/tomato-soup/tomato-soup-threeByTwoMediumAt2X.jpg"
                    : item == "Cheescake"
                    ? "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2Farchive%2F7b084eaf9d7d564dd2667094c3dd1260a5e4d646"
                    : "img_avatar.png"
                }
              ></img>
            </li>
          );
        })}
      </ul>
      <p>Total orders: {list.length}</p>
    </>
  );
};
export default InputBtn;
