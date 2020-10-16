import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_RESET,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
  ORDER_VIEW_FAIL,
  ORDER_VIEW_REQUEST,
  ORDER_VIEW_RESET,
  ORDER_VIEW_SUCCESS,
  ORDER_ADMIN_VIEW_REQUEST,
  ORDER_ADMIN_VIEW_SUCCESS,
  ORDER_ADMIN_VIEW_FAIL,
  ORDER_ADMIN_VIEW_RESET,
  ORDER_ADMIN_DELIVER_REQUEST,
  ORDER_ADMIN_DELIVER_SUCCESS,
  ORDER_ADMIN_DELIVER_FAIL,
  ORDER_ADMIN_DELIVER_RESET,
} from "../types/orderTypes";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const orderViewReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_VIEW_REQUEST:
      return {
        loading: true,
      };
    case ORDER_VIEW_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ORDER_VIEW_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_VIEW_RESET:
      return {
        orders: [],
      };
    default:
      return state;
  }
};

export const orderAdminViewReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_ADMIN_VIEW_REQUEST:
      return {
        loading: true,
      };
    case ORDER_ADMIN_VIEW_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ORDER_ADMIN_VIEW_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_ADMIN_VIEW_RESET:
      return {
        orders: [],
      };
    default:
      return state;
  }
};

export const orderAdminDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_ADMIN_DELIVER_REQUEST:
      return {
        loading: true,
      };
    case ORDER_ADMIN_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_ADMIN_DELIVER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_ADMIN_DELIVER_RESET:
      return {};
    default:
      return state;
  }
};