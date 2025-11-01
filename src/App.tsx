import { useState } from "react";

import "./App.css";

function App() {
  const allItems = [
    {
      id: 1,
      title: "buttermilk pancakes",
      price: "15.9",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      addressImg: "/src/assets/img/item-1.jpeg",
      type: "breakfast",
    },
    {
      id: 2,
      title: "buttermilk pancakes",
      price: "15.9",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      addressImg: "/src/assets/img/item-2.jpeg",
      type: "lunch",
    },
    {
      id: 3,
      title: "godzilla milkshake",
      price: "6.99",
      description:
        "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
      addressImg: "/src/assets/img/item-3.jpeg",
      type: "shakes",
    },
    {
      id: 4,
      title: "country delight",
      price: "20.99",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      addressImg: "/src/assets/img/item-4.jpeg",
      type: "breakfast",
    },
    {
      id: 5,
      title: "egg attack",
      price: "22.99",
      description:
        "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
      addressImg: "/src/assets/img/item-5.jpeg",
      type: "breakfast",
    },
    {
      id: 6,
      title: "oreo dream",
      price: "18.99",
      description:
        "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
      addressImg: "/src/assets/img/item-6.jpeg",
      type: "shakes",
    },
    {
      id: 7,
      type: "dinner",
      title: "bacon overflow",
      price: "8.99",
      description:
        "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
      addressImg: "/src/assets/img/item-7.jpeg",
    },
    {
      id: 8,
      type: "Lunch",
      title: "american classic",
      price: "12.99",
      description:
        "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
      addressImg: "/src/assets/img/item-8.jpeg",
    },
    {
      id: 9,
      type: "Shakes",
      title: "quarantine buddy",
      price: "16.99",
      description:
        "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
      addressImg: "/src/assets/img/item-9.jpeg",
    },
    {
      id: 10,
      type: "dinner",
      title: "bison steak",
      price: "22.99",
      description:
        "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
      addressImg: "/src/assets/img/item-10.jpeg",
    },
  ];
  const [items, setItems] = useState(allItems);

  return (
    <>
      <div className="flex col-auto justify-center mt-9 ">
        <h2 className="font-bold capitalize text-[40px] text-[#102a42] border-b-3 border-[#c59d5f]">
          our menu
        </h2>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center p-5">
        <button
          className="border-[#c59d5f] border-2 rounded-md px-2 text-[#c59d5f] hover:bg-[#c59d5f] hover:text-white"
          onClick={() => {
            setItems(allItems);
          }}
        >
          All
        </button>
        <button
          className="border-[#c59d5f] border-2 rounded-md px-2 text-[#c59d5f] hover:bg-[#c59d5f] hover:text-white"
          onClick={() => {
            const filterBreakfastItem = allItems.filter((item) => {
              return item.type === "breakfast";
            });
            console.log(filterBreakfastItem);
            setItems(filterBreakfastItem);
          }}
        >
          Breakfast
        </button>
        <button
          className="border-[#c59d5f] border-2 rounded-md px-2 text-[#c59d5f] hover:bg-[#c59d5f] hover:text-white capitalize"
          onClick={() => {
            const filterlunchtItem = allItems.filter((item) => {
              return item.type === "lunch";
            });
            console.log(filterlunchtItem);
            setItems(filterlunchtItem);
          }}
        >
          {" "}
          lunch
        </button>
        <button
          className="border-[#c59d5f] border-2 rounded-md px-2 text-[#c59d5f] hover:bg-[#c59d5f] hover:text-white capitalize"
          onClick={() => {
            const filtershakestItem = allItems.filter((item) => {
              return item.type === "shakes";
            });

            setItems(filtershakestItem);
          }}
        >
          shakes
        </button>
        <button
          className="border-[#c59d5f] border-2 rounded-md px-2 text-[#c59d5f] hover:bg-[#c59d5f] hover:text-white capitalize"
          onClick={() => {
            const filterdinnerItem = allItems.filter((item) => {
              return item.type === "dinner";
            });

            setItems(filterdinnerItem);
          }}
        >
          dinner
        </button>
      </div>

      <ul className=" grid grid-cols-2 grid-rows-5 p-8  gap-5">
        {items.map((item) => (
          <li key={item.id}>
            <div className="flex flex-row gap-3 bg-white p-2 rounded-md">
              <img
                className=" h-[150px]  border-3 rounded-md border-[#c59d5f]"
                src={item.addressImg}
                alt={item.title}
              />
              <div className="flex flex-col p-5">
                <div className="flex flex-row gap-7 justify-between border-b-1 border-[#617d98] ">
                  <h3 className="text-[#102a42] capitalize font-bold ">
                    {item.title}
                  </h3>
                  <span className="text-[#c59d5f] font-bold">{item.price}</span>
                </div>
                <p className="item-description p-3 text-[#617d98]">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
