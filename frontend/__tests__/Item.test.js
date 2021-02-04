import ItemComponent from "../components/Item";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

const fakeItem = {
  id: 123,
  title: "💎 💎 🙌🏻 🙌🏻",
  price: 69420,
  description: "Squeeze tight",
  image: "diamond.jpg",
  largeImage: "diamond_lg.jpg",
};

describe("<Item />", () => {
  it("renders and matches the snapshot", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  // it("renders the image properly", () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);

  //   const img = wrapper.find("img");
  //   expect(img.props().src).toBe(fakeItem.image);
  //   expect(img.props().alt).toBe(fakeItem.title);
  // });

  // it("renders the price tag and title properly", () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //   const PriceTag = wrapper.find("PriceTag");

  //   expect(PriceTag.children().text()).toBe("$4.20");
  //   expect(wrapper.find("Title a").text()).toBe(fakeItem.title);
  // });

  // it("renders the buttons properly", () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //   const buttonList = wrapper.find(".buttonList");

  //   expect(buttonList.children()).toHaveLength(3);
  //   expect(buttonList.find("Link")).toHaveLength(1);
  //   expect(buttonList.find("AddToCart").exists()).toBe(true);
  //   expect(buttonList.find("DeleteItem").exists()).toBe(true);
  // });
});
