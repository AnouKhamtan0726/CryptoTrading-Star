import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/index";
import Lock from "./pages/lock";
import Otp1 from "./pages/otp-1";
import Otp2 from "./pages/otp-2";
import Reset from "./pages/reset";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import AccountAffiliate from "./pages/account-affiliate";
// import AccountApi from './pages/account-api';
import Exchange from "./pages/exchange";
import AccountDeposit from "./pages/account-deposit";
import AccountOverview from "./pages/account-overview";
import AccountWithdraw from "./pages/account-withdraw";
import Settings from "./pages/settings";
import SettingAccount from "./pages/settings-account";
import Preferences from "./pages/settings-preferences";
import Security from "./pages/settings-security";
import VerifyStep1 from "./pages/verify-step-1";
import VerifyStep2 from "./pages/verify-step-2";
import VerifyStep3 from "./pages/verify-step-3";
import VerifyStep4 from "./pages/verify-step-4";
import VerifyStep5 from "./pages/verify-step-5";
import VerifyStep6 from "./pages/verify-step-6";
import BankAcc from "./pages/add-bank-acc";
import DebitCard from "./pages/add-debit-card";
import Tbi from "./pages/data-tbi";
import PrizePool from "./pages/prize-pool";
import FundingRate from "./pages/data-funding-rate";
import IndexPrice from "./pages/data-index-price";
import InsuranceFund from "./pages/data-insurance-fund";
import LastPrice from "./pages/data-last-price";
import MarkPrice from "./pages/data-mark-price";
import EmailVerification from "./pages/email-verification";

class Index extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div id="main-wrapper">
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/exchange" component={Exchange} />
              <Route path="/lock" component={Lock} />
              <Route path="/otp-1" component={Otp1} />
              <Route path="/otp-2" component={Otp2} />
              <Route path="/email-verify" component={EmailVerification} />
              <Route path="/reset" component={Reset} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/account-affiliate" component={AccountAffiliate} />
              {/* <Route path='/account-api' component={AccountApi} /> */}
              <Route path="/account-deposit" component={AccountDeposit} />
              <Route path="/account-withdraw" component={AccountWithdraw} />
              <Route path="/account-overview" component={AccountOverview} />
              <Route path="/settings" component={Settings} />
              <Route path="/settings-account" component={SettingAccount} />
              <Route path="/settings-preferences" component={Preferences} />
              <Route path="/settings-security" component={Security} />
              <Route path="/verify-step-1" component={VerifyStep1} />
              <Route path="/verify-step-2" component={VerifyStep2} />
              <Route path="/verify-step-3" component={VerifyStep3} />
              <Route path="/verify-step-4" component={VerifyStep4} />
              <Route path="/verify-step-5" component={VerifyStep5} />
              <Route path="/verify-step-6" component={VerifyStep6} />
              <Route path="/add-bank-acc" component={BankAcc} />
              <Route path="/add-debit-card" component={DebitCard} />
              <Route path="/data-tbi" component={Tbi} />
              <Route path="/data-funding-rate" component={FundingRate} />
              <Route path="/data-index-price" component={IndexPrice} />
              <Route path="/data-insurance-fund" component={InsuranceFund} />
              <Route path="/data-last-price" component={LastPrice} />
              <Route path="/data-mark-price" component={MarkPrice} />
              <Route path="/prize-pool" component={PrizePool} />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default Index;
