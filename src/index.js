import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Header from "./Navs/Header";
import Sidebar from "./Navs/Sidebar";
import Footer from "./Navs/Footer";

import { Dashboard } from './Contents/Dashboard/Dashboard';
import { Sales } from './Contents/Sales/Sales';
import { Discount } from './Contents/Discount/Discount';
import { Purchase } from './Contents/Purchase/Purchase';
import { Expense } from './Contents/Expense/Expense';
import { Inventory } from './Contents/InventoryProduct/Inventory';
import { InventoryAdjustment } from './Contents/InventoryProduct/InventoryAdjustment';
import { Waste } from './Contents/Waste/Waste';
import { SignIn } from './Contents/Auth/SignIn';
import { SignUp } from './Contents/Auth/SignUp';
import { SupplierDuePayments } from './Contents/SupplierDuePayments/SupplierDuePayments';
import { CustomerDueReceive } from './Contents/CustomerDueReceive/CustomerDueReceive';
import { Attendance } from './Contents/Attendance/Attendance';

//SMS
import { SendSMS } from './Contents/SendSMS/SendSMS';
import { TestSMS } from './Contents/SendSMS/TestSMS';
import { CheckBalance } from './Contents/SendSMS/CheckBalance';
import { CustomerWhoAnniversary } from './Contents/SendSMS/CustomerWhoAnniversary';
import { CustomerWhoBirthday } from './Contents/SendSMS/CustomerWhoBirthday';
import { SmsAllCustomer } from './Contents/SendSMS/SmsAllCustomer';

//Reports
import { ConsumptionReport } from "./Contents/Reports/ConsumptionReport";
import { CustomerDueReport } from "./Contents/Reports/CustomerDueReport";
import { CustomerLedger } from "./Contents/Reports/CustomerLedger";
import { DailySaleReport } from "./Contents/Reports/DailySaleReport";
import { DetailedSaleReport } from "./Contents/Reports/DetailedSaleReport";
import { ExpenseReport } from "./Contents/Reports/ExpenseReport";
import { FoodSaleReport } from "./Contents/Reports/FoodSaleReport";
import { InventoryReport } from "./Contents/Reports/InventoryReport";
import { KitchenPerformanceReport } from "./Contents/Reports/KitchenPerformanceReport";
import { LowInventoryReport } from "./Contents/Reports/LowInventoryReport";
import { RegistryReport } from "./Contents/Reports/RegistryReport";
import { SupplierDueReport } from "./Contents/Reports/SupplierDueReport";
import { SupplierLedger } from "./Contents/Reports/SupplierLedger";
import { WasteReport } from "./Contents/Reports/WasteReport";
import { AttendanceReport } from "./Contents/Reports/AttendanceReport";
import { DailySummaryReport } from "./Contents/Reports/DailySummaryReport";
import { ProfitLossReport } from "./Contents/Reports/ProfitLossReport";
import { PurchaseReport } from "./Contents/Reports/PurchaseReport";
import { VatReport } from "./Contents/Reports/VatReport";

//Master
import { FoodMenuCategories } from "./Contents/Master/FoodMenuCategories";
import { IngredientCategories } from "./Contents/Master/IngredientCategories";
import { Ingredients } from "./Contents/Master/Ingredients";
import { IngredientUnits } from "./Contents/Master/IngredientUnits";
import { PaymentMethods } from "./Contents/Master/PaymentMethods";
import { Tables } from "./Contents/Master/Tables";
import { Variant } from "./Contents/Master/Variant";
import { Vat } from "./Contents/Master/Vat";
import { Customer } from "./Contents/Master/Customer";
import { ExpenseItems } from "./Contents/Master/ExpenseItems";
import { FoodMenus } from "./Contents/Master/FoodMenus";
import { Supplier } from "./Contents/Master/Supplier";

//Setting
import { ChangePassword } from "./Contents/Setting/ChangePassword";
import { ChangeProfile } from "./Contents/Setting/ChangeProfile";
import { Logout } from "./Contents/Setting/Logout";
import { GeneralSetting } from "./Contents/Setting/GeneralSetting";
import { ManageUsers } from "./Contents/Setting/ManageUsers";
import { SmsSetting } from "./Contents/Setting/SmsSetting";
import { RestaurantSetting } from "./Contents/Setting/RestaurantSetting";

const routing = (
  <Router>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Header />
    <Sidebar />
    <div className="page-wrapper">
      <div className="container-fluid">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/expense" component={Expense} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/inventoryadjustment" component={InventoryAdjustment} />
          <Route path="/waste" component={Waste} />
          <Route path="/discount" component={Discount} />

          <Route path="/attendancereport" component={AttendanceReport} />
          <Route path="/consumptionreport" component={ConsumptionReport} />
          <Route path="/customerduereport" component={CustomerDueReport} />
          <Route path="/customerledger" component={CustomerLedger} />
          <Route path="/dailysalereport" component={DailySaleReport} />
          <Route path="/dailysummaryreport" component={DailySummaryReport} />
          <Route path="/detailedsalereport" component={DetailedSaleReport} />
          <Route path="/expensereport" component={ExpenseReport} />
          <Route path="/foodsalereport" component={FoodSaleReport} />
          <Route path="/inventoryreport" component={InventoryReport} />
          <Route path="/kitchenperformancereport" component={KitchenPerformanceReport} />
          <Route path="/lowinventoryreport" component={LowInventoryReport} />
          <Route path="/profitlossreport" component={ProfitLossReport} />
          <Route path="/purchasereport" component={PurchaseReport} />
          <Route path="/registryreport" component={RegistryReport} />
          <Route path="/supplierduereport" component={SupplierDueReport} />
          <Route path="/supplierledger" component={SupplierLedger} />
          <Route path="/vatreport" component={VatReport} />
          <Route path="/wastereport" component={WasteReport} />

          <Route path="/customer" component={Customer} />
          <Route path="/expenseitems" component={ExpenseItems} />
          <Route path="/foodmenucategories" component={FoodMenuCategories} />
          <Route path="/foodmenus" component={FoodMenus} />
          <Route path="/ingredientcategories" component={IngredientCategories} />
          <Route path="/ingredients" component={Ingredients} />
          <Route path="/ingredientunits" component={IngredientUnits} />
          <Route path="/paymentmethods" component={PaymentMethods} />
          <Route path="/supplier" component={Supplier} />
          <Route path="/tables" component={Tables} />
          <Route path="/variant" component={Variant} />
          <Route path="/vat" component={Vat} />

          <Route path="/changepassword" component={ChangePassword} />
          <Route path="/changeprofile" component={ChangeProfile} />
          <Route path="/generalsetting" component={GeneralSetting} />
          <Route path="/logout" component={Logout} />
          <Route path="/manageusers" component={ManageUsers} />
          <Route path="/smssetting" component={SmsSetting} />
          <Route path="/restaurantsetting" component={RestaurantSetting} />

          <Route path="/sendsms" component={SendSMS} />
          <Route path="/testsms" component={TestSMS} />
          <Route path="/checkbalance" component={CheckBalance} />
          <Route path="/smsallcustomer" component={SmsAllCustomer} />
          <Route path="/customerwhobirthday" component={CustomerWhoBirthday} />
          <Route path="/customerwhoanniversary" component={CustomerWhoAnniversary} />

          <Route path="/supplierduepayments" component={SupplierDuePayments} /> 
          <Route path="/customerduereceive" component={CustomerDueReceive} /> 
          <Route path="/sales" component={Sales} />
          <Route path="/purchase" component={Purchase} />
          <Route path="/attendance" component={Attendance} />

          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </div>
    <Footer />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
