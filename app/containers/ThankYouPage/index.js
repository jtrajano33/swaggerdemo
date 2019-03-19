/**
 *
 * ThankYouPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectThankYouPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Navbar from '../SwaggerHome/components/Navbar';
import Footer from '../SwaggerHome/components/Footer';
import { makeSelectOrderDetails } from '../Cart/selectors';
import { makeSelectModeOfPayment } from '../Checkout/selectors';
/* eslint-disable react/prefer-stateless-function */
export class ThankYouPage extends React.Component {
  render() {
    const { orderDetails, modeOfPayment } = this.props;

    let paymentGatewayValue;

    if (!modeOfPayment) {
      // return <div>No transaction</div>
      window.location.href = '/';
    } else {
      const paymentGateway = modeOfPayment.totalAmounts.filter(
        crypto => modeOfPayment.currency === crypto.id,
      );

      paymentGatewayValue = `${paymentGateway[0].amountToPay} ${
        paymentGateway[0].symbol
      }`;

      return (
        <div>
          <Helmet>
            <title>Thank You!</title>
            <meta name="description" content="Description of ThankYouPage" />
          </Helmet>
          <Navbar />

          <div className="columns">
            <div className="column is-4 is-offset-4">
              <div className="box" style={{ marginTop: '30px' }}>
                <div className="has-text-centered">
                  <i className="fas fa-check-circle fa-9x thankYouApproved" />
                </div>
                <div
                  className="has-text-centered"
                  style={{ marginTop: '40px' }}
                >
                  <p>
                    Thank you for purchasing! To complete the transaction, use
                    the wallet address below during payment:
                  </p>
                  <br />
                  <div
                    className="has-text-centered"
                    style={{ fontSize: '12px' }}
                  >
                    <strong>
                      <p style={{ margin: '10px 0px' }}>Wallet Address:</p>
                      <input
                        className="input"
                        disabled
                        value={orderDetails.walletAddress}
                      />
                      <p style={{ margin: '10px 0px' }}>Amount to pay:</p>
                      <input
                        className="input"
                        disabled
                        value={paymentGatewayValue}
                      />
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ position: 'fixed', bottom: '0px', width: '100%' }}>
            <Footer />
          </div>
        </div>
      );
    }
  }
}

ThankYouPage.propTypes = {
  orderDetails: PropTypes.object,
  modeOfPayment: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  thankYouPage: makeSelectThankYouPage(),
  orderDetails: makeSelectOrderDetails(),
  modeOfPayment: makeSelectModeOfPayment(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'thankYouPage', reducer });
const withSaga = injectSaga({ key: 'thankYouPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ThankYouPage);
