export const API_URL = "http://localhost:5000/api/v1";
export const API_ME = `${API_URL}/profile/me`;
export const API_LOGIN = `${API_URL}/auth/login`;
export const API_EMAIL_VALIDATION = `${API_URL}/users/email-validation`;
export const API_CHECK_OTP = `${API_URL}/users/otp-validation`;
export const API_REFRESH_OTP = `${API_URL}/users/otp-refresh`;
export const API_REGISTER = `${API_URL}/users/register`;
export const API_ALL_PRODUCT = `${API_URL}/products/search-all-product`;
export const API_PRODUCT = `${API_URL}/products`;
export const API_CATEGORIES = `${API_URL}/products/get-all-category`;
export const API_ADD_TO_CART = `${API_URL}/carts/add-to-cart`;
export const API_DECREASE_ITEM_CART = `${API_URL}/carts/decrease-cart`;
export const API_UPDATE_CART = `${API_URL}/carts/update-quantity`;
export const API_CART_ITEMS = `${API_URL}/carts`;
export const API_CART_CHECKOUT = `${API_URL}/orders/create-order`;
export const API_ORDER_ITEMS = `${API_URL}/orders/items`;
export const API_PAYMENT = `${API_URL}/orders/payment`;