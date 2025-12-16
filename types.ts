import React from 'react';

export interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string; // Mapped from WooCommerce images[0].src
  brand?: string;
  discount?: number;
  isFavorite?: boolean;
  oldPrice?: number; // Mapped from regular_price if on sale
  description?: string;
  permalink?: string; // Link to the product on WP site
  stock_status?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export type ViewState = 'home' | 'cart' | 'register' | 'login' | 'offers' | 'help' | 'favorites';

export interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  cartCount?: number;
}