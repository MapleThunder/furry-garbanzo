import { OrderList } from "../components/OrderList";
import { PleaseSignIn } from "../components/PleaseSignIn";

const OrdersListPage = (props) => (
  <div>
    <PleaseSignIn>
      <OrderList />
    </PleaseSignIn>
  </div>
);

export default OrdersListPage;
