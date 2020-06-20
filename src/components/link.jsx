import PropTypes from 'prop-types';

const Link = (props) => {
  const { children, block, ...restProps } = props;
  const style = {};
  if (block) {
    style.display = 'block';
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <a {...restProps} style={style}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  block: PropTypes.bool,
};

Link.defaultProps = {
  children: null,
  block: true,
};

export default Link;
