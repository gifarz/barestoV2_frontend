import React from "react";
import {withRouter} from "react-router-dom";
import './style.css';

const Sidebar = (props) => {

  const dashboard = () => {
    props.history.push("/dashboard")
  }

  const sales = () => {
    props.history.push("/sales")
  }

  const purchase = () => {
    props.history.push("/purchase")
  }

  const expense = () => {
    props.history.push("/expense")
  }

  const supplierDue = () => {
    props.history.push("/supplierduepayments")
  }

  const customerDue = () => {
    props.history.push("/customerduereceive")
  }

  const inventory = () => {
    props.history.push("/inventory")
  }

  const inventoryAdjustment = () => {
    props.history.push("/inventoryadjustment")
  }

  const waste = () => {
    props.history.push("/waste")
  }

  const attendance = () => {
    props.history.push("/attendance")
  }

  const sendSMS = () => {
    props.history.push("/sendsms")
  }

  const discount = () => {
    props.history.push("/discount")
  }

  //Reports
  const attendanceReport = () => {
    props.history.push("/attendancereport")
  }

  const consumptionReport = () => {
    props.history.push("/consumptionreport")
  }

  const customerDueReport = () => {
    props.history.push("/customerduereport")
  }

  const customerLedger = () => {
    props.history.push("/customerledger")
  }

  const dailySaleReport = () => {
    props.history.push("/dailysalereport")
  }

  const dailySummaryReport = () => {
    props.history.push("/dailysummaryreport")
  }

  const detailedSaleReport = () => {
    props.history.push("/detailedsalereport")
  }

  const expenseReport = () => {
    props.history.push("/expensereport")
  }

  const foodSaleReport = () => {
    props.history.push("/foodsalereport")
  }

  const inventoryReport = () => {
    props.history.push("/inventoryreport")
  }

  const kitchenPerformanceReport = () => {
    props.history.push("/kitchenperformancereport")
  }

  const lowInventoryReport = () => {
    props.history.push("/lowinventoryreport")
  }

  const profitLossReport = () => {
    props.history.push("/profitlossreport")
  }

  const purchaseReport = () => {
    props.history.push("/purchasereport")
  }

  const registryReport = () => {
    props.history.push("/registryreport")
  }

  const supplierDueReport = () => {
    props.history.push("/supplierduereport")
  }

  const supplierLedger = () => {
    props.history.push("/supplierledger")
  }

  const vatReport = () => {
    props.history.push("/vatreport")
  }

  const wasteReport = () => {
    props.history.push("/wastereport")
  }

  //Master
  const customer = () => {
    props.history.push("/customer")
  }

  const expenseItems = () => {
    props.history.push("/expenseitems")
  }

  const foodMenuCategories = () => {
    props.history.push("/foodmenucategories")
  }

  const foodMenus = () => {
    props.history.push("/foodmenus")
  }

  const ingredientCategories = () => {
    props.history.push("/ingredientcategories")
  }

  const ingredients = () => {
    props.history.push("/ingredients")
  }

  const ingredientUnits = () => {
    props.history.push("/ingredientunits")
  }

  const paymentMethods = () => {
    props.history.push("/paymentmethods")
  }

  const supplier = () => {
    props.history.push("/supplier")
  }

  const tables = () => {
    props.history.push("/tables")
  }

  const variant = () => {
    props.history.push("/variant")
  }

  const vat = () => {
    props.history.push("/vat")
  }

  //Settings
  const changePassword = () => {
    props.history.push("/changepassword")
  }

  const changeProfile = () => {
    props.history.push("/changeprofile")
  }

  const generalSetting = () => {
    props.history.push("/generalsetting")
  }

  const manageUsers = () => {
    props.history.push("/manageusers")
  }

  const smsSetting = () => {
    props.history.push("/smssetting")
  }

  const restaurantSetting = () => {
    props.history.push("/restaurantsetting")
  }

    return (
      <div>
        <aside className="left-sidebar">
          {/* Sidebar scroll*/}
          <div className="scroll-sidebar">
            {/* Sidebar navigation*/}
            <nav className="sidebar-nav">
              <ul id="sidebarnav">
                <li className="user-pro">
                  <a
                    className="waves-effect waves-dark"
                    href
                    aria-expanded="false"
                  >
                    <img
                      src="../assets/images/users/1.jpg"
                      alt="user-img"
                      className="img-circle"
                    />
                    <span className="hide-menu">Mark Jeckson</span>
                  </a>
                  {/* <ul aria-expanded="false" className="collapse">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="ti-user" /> My Profile
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="ti-wallet" /> My Balance
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="ti-email" /> Inbox
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="ti-settings" /> Account Settings
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fa fa-power-off" /> Logout
                      </a>
                    </li>
                  </ul> */}
                </li>
                
                <li className="nav-small-cap">--- MAIN NAVIGATION</li>
                <li className="sidebar-item">
                  <a href
                    className="waves-effect waves-dark"
                    onClick={dashboard}
                    aria-expanded="false"
                  >
                    <i className="ti-crown" />
                    <span className="hide-menu">Dashboard</span>
                  </a>
                </li>

                <li className="sidebar-item">
                  <a href
                    className="waves-effect waves-dark"
                    onClick={sales}
                    aria-expanded="false"
                  >
                    <i className="ti-credit-card" />
                    <span className="hide-menu">Sales</span>
                  </a>
                </li>

                <li className="sidebar-item">
                  <a href
                    className="waves-effect waves-dark"
                    onClick={purchase}
                    aria-expanded="false"
                  >
                    <i className="ti-shopping-cart" />
                    <span className="hide-menu">Purchase</span>
                  </a>
                </li>

                <li className="sidebar-item">
                  <a href
                    className="waves-effect waves-dark"
                    onClick={discount}
                    aria-expanded="false"
                  >
                    <i className="ti-bag" />
                    <span className="hide-menu">Discount</span>
                  </a>
                </li>

                <li className="sidebar-item">
                  <a href
                    className="waves-effect waves-dark"
                    onClick={expense}
                    aria-expanded="false"
                  >
                    <i className="ti-exchange-vertical" />
                    <span className="hide-menu">Expense</span>
                  </a>
                </li>

                <li className="sidebar-item">
                  <a href
                    className="waves-effect waves-dark"
                    onClick={supplierDue}
                    aria-expanded="false"
                  >
                    <i className="ti-wallet" />
                    <span className="hide-menu">Supplier Due Payments</span>
                  </a>
                </li>

                <li className="sidebar-item">
                  <a href
                    className="waves-effect waves-dark"
                    onClick={customerDue}
                    aria-expanded="false"
                  >
                    <i className="ti-wallet" />
                    <span className="hide-menu">Customer Due Receive</span>
                  </a>
                </li>

                <li className="sidebar-item">
                  <a href
                    className="has-arrow waves-effect waves-dark"
                    aria-expanded="false"
                  >
                    <i className="ti-archive" />
                    <span className="hide-menu">Inventory</span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                  <li>
                      <a href onClick={inventory} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Inventory
                      </a>
                    </li>
                    <li>
                      <a href onClick={inventoryAdjustment} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Inventory Adjusment
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="sidebar-item">
                  <a href
                    className="waves-effect waves-dark"
                    onClick={waste}
                    aria-expanded="false"
                  >
                    <i className="ti-trash" />
                    <span className="hide-menu">Waste</span>
                  </a>
                </li>

                <li className="sidebar-item">
                  <a href
                    className="waves-effect waves-dark"
                    onClick={sendSMS}
                    aria-expanded="false"
                  >
                    <i className="ti-email" />
                    <span className="hide-menu">Send SMS</span>
                  </a>
                </li>

                <li className="sidebar-item">
                  <a href
                    className="waves-effect waves-dark"
                    onClick={attendance}
                    aria-expanded="false"
                  >
                    <i className="ti-time" />
                    <span className="hide-menu">Attendance</span>
                  </a>
                </li>

                <li className="sidebar-item">
                  <a href
                    className="has-arrow waves-effect waves-dark"
                    aria-expanded="false"
                  >
                    <i className="ti-bar-chart" />
                    <span className="hide-menu">Report</span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li>
                      <a href onClick={registryReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Registry Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={dailySummaryReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Daily Summary Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={foodSaleReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Food Sale Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={dailySaleReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Daily Sale Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={detailedSaleReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Detailed Sale Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={consumptionReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Consumption Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={inventoryReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Inventory Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={lowInventoryReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Low Inventory Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={profitLossReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Profit Loss Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={vatReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Vat Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={kitchenPerformanceReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Kitchen Performance Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={attendanceReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Attendance Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={supplierLedger} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Supplier Ledger
                      </a>
                    </li>
                    <li>
                      <a href onClick={supplierDueReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Supplier Due Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={customerDueReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Customer Due Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={customerLedger} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Customer Ledger
                      </a>
                    </li>
                    <li>
                      <a href onClick={purchaseReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Purchase Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={expenseReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Expense Report
                      </a>
                    </li>
                    <li>
                      <a href onClick={wasteReport} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Waste Report
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="sidebar-item">
                  <a href
                    className="has-arrow waves-effect waves-dark"
                    aria-expanded="false"
                  >
                    <i className="ti-id-badge" />
                    <span className="hide-menu">Master</span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li>
                      <a href onClick={ingredientCategories} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Ingredient Categories
                      </a>
                    </li>
                    <li>
                      <a href onClick={ingredientUnits} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Ingredient Units
                      </a>
                    </li>
                    <li>
                      <a href onClick={ingredients} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Ingredients
                      </a>
                    </li>
                    <li>
                      <a href onClick={vat} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> VATs
                      </a>
                    </li>
                    <li>
                      <a href onClick={variant} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Variant
                      </a>
                    </li>
                    <li>
                      <a href onClick={foodMenuCategories} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Food Menu Categories
                      </a>
                    </li>
                    <li>
                      <a href onClick={foodMenus} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Food Menus
                      </a>
                    </li>
                    <li>
                      <a href onClick={supplier} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Suppliers
                      </a>
                    </li>
                    <li>
                      <a href onClick={customer} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Customers
                      </a>
                    </li>
                    <li>
                      <a href onClick={expenseItems} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Expense Items
                      </a>
                    </li>
                    <li>
                      <a href onClick={paymentMethods} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Payment Methods
                      </a>
                    </li>
                    <li>
                      <a href onClick={tables} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Tables
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="sidebar-item">
                  <a href
                    className="has-arrow waves-effect waves-dark"
                    aria-expanded="false"
                  >
                    <i className="ti-settings" />
                    <span className="hide-menu">Settings</span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li>
                      <a href onClick={generalSetting} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> General Settings
                      </a>
                    </li>
                    <li>
                      <a href onClick={smsSetting} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> SMS Setting
                      </a>
                    </li>
                    <li>
                      <a href onClick={manageUsers} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Manage User
                      </a>
                    </li>
                    <li>
                      <a href onClick={changeProfile} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Change Profile
                      </a>
                    </li>
                    <li>
                      <a href onClick={changePassword} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Change Password
                      </a>
                    </li>
                    <li>
                      <a href onClick={restaurantSetting} className="waves-effect waves-dark">
                        <i className="ti-angle-double-right" /> Restaurant Setting
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* End Sidebar navigation */}
          </div>
          {/* End Sidebar scroll*/}
        </aside>
      </div>
    );
}

export default withRouter(Sidebar);