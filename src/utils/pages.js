
const pages = new Map();
pages.set('home', { name: 'Inicio', path: '/', anchorable: true });
pages.set('about', { name: 'Acerca de', path: '/about', anchorable: true });
pages.set('menu', { name: 'Menu', path: '/menu', anchorable: true });
pages.set('bookings', { 
  name: 'Reservaciones', 
  path: '/bookings', 
  anchorable: true 
});
pages.set('confirmedBooking', { 
  name: 'Reservación Confirmada', 
  path: '/confirmed-booking', 
  anchorable: false 
});
pages.set('orderOnline', { 
  name: 'Ordenar en línea', 
  path: '/order-online', 
  anchorable: true 
});
pages.set('login', { name: 'Registrarse', path: '/login', anchorable: true });

export default pages;
