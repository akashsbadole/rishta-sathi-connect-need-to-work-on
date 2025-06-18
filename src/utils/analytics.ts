
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your Google Analytics 4 Measurement ID

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  ReactGA.event({
    action,
    category,
    label,
    value,
  });
};

export const trackUserRegistration = (method: string) => {
  ReactGA.event({
    action: 'sign_up',
    category: 'engagement',
    label: method,
  });
};

export const trackUserLogin = (method: string) => {
  ReactGA.event({
    action: 'login',
    category: 'engagement',
    label: method,
  });
};

export const trackFormSubmission = (formName: string) => {
  ReactGA.event({
    action: 'form_submit',
    category: 'engagement',
    label: formName,
  });
};

export const trackPurchase = (transactionId: string, value: number, currency: string = 'INR') => {
  ReactGA.event({
    action: 'purchase',
    category: 'ecommerce',
    label: transactionId,
    value,
  });
};
