import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Header from "./Navs/Header";
import Sidebar from "./Navs/Sidebar";
import Footer from "./Navs/Footer";
import { SignIn } from './Contents/Auth/SignIn';
import { SignUp } from './Contents/Auth/SignUp';

import { Dashboard } from './Contents/ADMIN/Dashboard/Dashboard';
import { Sales } from './Contents/ADMIN/Sales/Sales';
import { Discount } from './Contents/ADMIN/Discount/Discount';
import { Purchase } from './Contents/ADMIN/Purchase/Purchase';
import { Expense } from './Contents/ADMIN/Expense/Expense';
import { Inventory } from './Contents/ADMIN/InventoryProduct/Inventory';
import { InventoryAdjustment } from './Contents/ADMIN/InventoryProduct/InventoryAdjustment';
import { Waste } from './Contents/ADMIN/Waste/Waste';
import { SupplierDuePayments } from './Contents/ADMIN/SupplierDuePayments/SupplierDuePayments';
import { CustomerDueReceive } from './Contents/ADMIN/CustomerDueReceive/CustomerDueReceive';
import { Attendance } from './Contents/ADMIN/Attendance/Attendance';

//SMS
import { SendSMS } from './Contents/ADMIN/SendSMS/SendSMS';
import { TestSMS } from './Contents/ADMIN/SendSMS/TestSMS';
import { CheckBalance } from './Contents/ADMIN/SendSMS/CheckBalance';
import { CustomerWhoAnniversary } from './Contents/ADMIN/SendSMS/CustomerWhoAnniversary';
import { CustomerWhoBirthday } from './Contents/ADMIN/SendSMS/CustomerWhoBirthday';
import { SmsAllCustomer } from './Contents/ADMIN/SendSMS/SmsAllCustomer';

//Reports
import { ConsumptionReport } from "./Contents/ADMIN/Reports/ConsumptionReport";
import { CustomerDueReport } from "./Contents/ADMIN/Reports/CustomerDueReport";
import { CustomerLedger } from "./Contents/ADMIN/Reports/CustomerLedger";
import { DailySaleReport } from "./Contents/ADMIN/Reports/DailySaleReport";
import { DetailedSaleReport } from "./Contents/ADMIN/Reports/DetailedSaleReport";
import { ExpenseReport } from "./Contents/ADMIN/Reports/ExpenseReport";
import { FoodSaleReport } from "./Contents/ADMIN/Reports/FoodSaleReport";
import { InventoryReport } from "./Contents/ADMIN/Reports/InventoryReport";
import { KitchenPerformanceReport } from "./Contents/ADMIN/Reports/KitchenPerformanceReport";
import { LowInventoryReport } from "./Contents/ADMIN/Reports/LowInventoryReport";
import { RegistryReport } from "./Contents/ADMIN/Reports/RegistryReport";
import { SupplierDueReport } from "./Contents/ADMIN/Reports/SupplierDueReport";
import { SupplierLedger } from "./Contents/ADMIN/Reports/SupplierLedger";
import { WasteReport } from "./Contents/ADMIN/Reports/WasteReport";
import { AttendanceReport } from "./Contents/ADMIN/Reports/AttendanceReport";
import { DailySummaryReport } from "./Contents/ADMIN/Reports/DailySummaryReport";
import { ProfitLossReport } from "./Contents/ADMIN/Reports/ProfitLossReport";
import { PurchaseReport } from "./Contents/ADMIN/Reports/PurchaseReport";
import { VatReport } from "./Contents/ADMIN/Reports/VatReport";

//Master
import { FoodMenuCategories } from "./Contents/ADMIN/Master/FoodMenuCategories";
import { IngredientCategories } from "./Contents/ADMIN/Master/IngredientCategories";
import { Ingredients } from "./Contents/ADMIN/Master/Ingredients";
import { IngredientUnits } from "./Contents/ADMIN/Master/IngredientUnits";
import { PaymentMethods } from "./Contents/ADMIN/Master/PaymentMethods";
import { Tables } from "./Contents/ADMIN/Master/Tables";
import { Variant } from "./Contents/ADMIN/Master/Variant";
import { Vat } from "./Contents/ADMIN/Master/Vat";
import { Customer } from "./Contents/ADMIN/Master/Customer";
import { ExpenseItems } from "./Contents/ADMIN/Master/ExpenseItems";
import { FoodMenus } from "./Contents/ADMIN/Master/FoodMenus";
import { Supplier } from "./Contents/ADMIN/Master/Supplier";

//Setting
import { ChangePassword } from "./Contents/ADMIN/Setting/ChangePassword";
import { ChangeProfile } from "./Contents/ADMIN/Setting/ChangeProfile";
import { Logout } from "./Contents/ADMIN/Setting/Logout";
import { GeneralSetting } from "./Contents/ADMIN/Setting/GeneralSetting";
import { ManageUsers } from "./Contents/ADMIN/Setting/ManageUsers";
import { SmsSetting } from "./Contents/ADMIN/Setting/SmsSetting";
import { RestaurantSetting } from "./Contents/ADMIN/Setting/RestaurantSetting";

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
