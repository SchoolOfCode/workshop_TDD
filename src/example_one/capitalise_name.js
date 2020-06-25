const capitaliseName = ({
  name = '',
} = {}) => (name ? name.toUpperCase() : '');

export default capitaliseName;
