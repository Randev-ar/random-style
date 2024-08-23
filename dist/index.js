'use strict';

var React = require('react');
var reactRouterDom = require('react-router-dom');

const Breadcrumb = () => {
  let location = reactRouterDom.useLocation();
  const [pathName, setPathName] = React.useState(null);
  let route = '';
  React.useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      location.pathname !== '/' ? setPathName(location.pathname.split('/')) : setPathName(['']);
    }
    return () => {
      isMounted = false;
    };
  }, [location]);
  return /*#__PURE__*/React.createElement("nav", {
    className: "breadcrumb"
  }, /*#__PURE__*/React.createElement("ol", {
    className: "container breadcrumb__list"
  }, pathName?.map(path => {
    if (path !== '') {
      route = `${route}/${path}`;
    }
    return /*#__PURE__*/React.createElement("li", {
      className: "breadcrumb__list__item ms--1",
      key: `path${path}`
    }, path === '' && /*#__PURE__*/React.createElement(reactRouterDom.NavLink, {
      to: "/"
    }, "Home"), path !== '' && /*#__PURE__*/React.createElement(reactRouterDom.NavLink, {
      to: `${route}`
    }, "/ ", path.replaceAll('-', ' ')));
  })));
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

const TooltipIconLabel = ({
  icon,
  tooltipText,
  label
}) => {
  return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", {
    class: "tooltip"
  }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("i", {
    className: icon
  })), /*#__PURE__*/React.createElement("span", {
    class: "tooltip-text"
  }, tooltipText)), label);
};
/**
 * Construye un boton con la className predeterminada `boton--e e--2 bg-color--primary mb--1`
 * @param label -> Sera el texto a mostrar en el boton
 * @param icon -> Sera el icono de FontAwsome a mostrar. De enviar esta opcion no se usara label
 * @param color -> Cambia el color de fondo del boton
 * @param className -> Cambia la predefinida
 * @param addClassName -> Agrega opciones a la clase definida
 * @param rest -> Cualquier otro parametro que se envie se pasara directamente al cuerpo del boton
 */
const Button = props => {
  const {
    label,
    icon,
    color,
    className,
    addClassName,
    image,
    tooltipText,
    ...rest
  } = props;
  const buttonClassName = className || `boton--e e--2 bg-color--${color || 'primary'} mb--1 ${addClassName}`;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: buttonClassName
  }, rest), /*#__PURE__*/React.createElement("span", null, tooltipText && /*#__PURE__*/React.createElement(TooltipIconLabel, {
    icon: icon,
    label: label,
    tooltipText: tooltipText
  }), !tooltipText && icon && /*#__PURE__*/React.createElement("i", {
    className: icon
  }), !tooltipText && label && label, image && /*#__PURE__*/React.createElement("img", {
    style: {
      "max-width": "25px",
      "width": "100%"
    },
    src: image,
    alt: "img_boton"
  })));
};

const Footer = () => {
  const linkedin = process.env.REACT_APP_SOCIAL_LINKEDIN;
  const facebook = process.env.REACT_APP_SOCIAL_FACEBOOK;
  const github = process.env.REACT_APP_SOCIAL_GITHUB;
  const instagram = process.env.REACT_APP_SOCIAL_INSTAGRAM;
  const socialMedia = {
    linkedin,
    github,
    facebook,
    instagram
  };
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "footer color--white"
  }, /*#__PURE__*/React.createElement("span", {
    className: "color--white"
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'white',
      textDecoration: 'none'
    },
    href: "mailto: soporte@randev.com.ar"
  }, "soporte@randev.com.ar")), /*#__PURE__*/React.createElement("div", {
    className: "btn-social-desk"
  }, socialMedia?.linkedin && /*#__PURE__*/React.createElement("a", {
    className: "btn-social color--white ",
    href: socialMedia.linkedin,
    target: "blank"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-linkedin"
  })), socialMedia?.github && /*#__PURE__*/React.createElement("a", {
    className: "btn-social color--white ms--1",
    href: socialMedia.github,
    target: "blank"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-github"
  })), socialMedia?.facebook && /*#__PURE__*/React.createElement("a", {
    className: "btn-social color--white ms--1",
    href: socialMedia.facebook,
    target: "blank"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-facebook-square"
  })), socialMedia?.instagram && /*#__PURE__*/React.createElement("a", {
    className: "btn-social color--white ms--1",
    href: socialMedia.instagram,
    target: "blank"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-instagram"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "faq-footer"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-footer--text"
  }, "Made with ", /*#__PURE__*/React.createElement("span", {
    className: "corazon"
  }), " by ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.randev.com.ar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: '900',
      fontStyle: 'italic',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "color--primary"
  }, "ran"), /*#__PURE__*/React.createElement("span", {
    className: "color--secondary"
  }, "dev"))), /*#__PURE__*/React.createElement("br", null), "\xA92023 - Random Development")));
};

const Modal = props => {
  let {
    visible,
    children,
    onClose,
    bgClose,
    className,
    style,
    overlayStyle
  } = props;
  const onModalClick = e => e.stopPropagation();
  const onCloseHandler = () => onClose && onClose();
  const onBgClick = () => bgClose && onCloseHandler();
  if (visible) return /*#__PURE__*/React.createElement("div", {
    className: "modal__overlay ",
    onClick: onBgClick,
    overlayStyle: overlayStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: `modal ${className}`,
    onClick: onModalClick,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: 'modal__header'
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal__closeBtn",
    onClick: onCloseHandler
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: 'modal__body'
  }, children)));
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
const ModalButtonWrapper = ({
  buttonText,
  children,
  className,
  bgClose,
  open,
  classNameModal,
  alCerrar,
  toggleOpen,
  setToggleOpen
}) => {
  const [visible, setVisible] = React.useState(false);
  const [classNameM, setclassNameM] = React.useState('');
  React.useEffect(() => {
    toggleOpen !== null && setVisible(toggleOpen);
    setToggleOpen && setToggleOpen(null);
  }, [toggleOpen, setToggleOpen]);
  React.useEffect(() => {
    open && setVisible(true);
    classNameModal && setclassNameM(classNameModal);
  }, [open, classNameModal]);
  const onButtonClick = () => setVisible(true);
  const onClose = () => {
    open = false;
    setVisible(false);
    alCerrar && alCerrar();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: className,
    onClick: onButtonClick,
    type: "button"
  }, /*#__PURE__*/React.createElement("span", null, buttonText)), /*#__PURE__*/React.createElement(Modal, {
    visible: visible,
    className: classNameM,
    onClose: onClose,
    bgClose: bgClose
  }, children));
};

const Navbar = ({
  src,
  title,
  list
}) => {
  const [show, setShow] = React.useState('');
  return /*#__PURE__*/React.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("label", {
    className: "navbar__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    className: "logo_name",
    alt: "logo",
    style: {
      maxWidth: '10rem'
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "navbar__link"
  }, title)), /*#__PURE__*/React.createElement("ul", {
    className: `navbar__linkGroup ${show}`
  }, list), /*#__PURE__*/React.createElement("span", {
    className: "navbar__btn",
    onClick: () => show === '' ? setShow('show') : setShow('')
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-bars"
  })));
};

const Sidebar = ({
  user,
  logout,
  rol,
  style,
  navList
}) => {
  let title = process.env.REACT_APP_WEBSITE_NAME;
  const [active, setActive] = React.useState(false);
  return /*#__PURE__*/React.createElement("aside", {
    className: `sidebar ${active && 'active'}  ${user === null && 'd--none'}`,
    style: style && style.sidebar
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo_content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo",
    style: style && style.logo
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "logoname"
  }, title)), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-bars",
    id: "btn",
    onClick: () => setActive(!active)
  })), /*#__PURE__*/React.createElement("ul", {
    className: "nav_list"
  }, navList?.map(navItem => /*#__PURE__*/React.createElement("li", {
    key: navItem.to
  }, /*#__PURE__*/React.createElement(reactRouterDom.NavLink, {
    className: "navbar__link",
    to: navItem.to
  }, /*#__PURE__*/React.createElement("i", {
    className: navItem.icon
  }), /*#__PURE__*/React.createElement("span", {
    className: "links_name"
  }, navItem.name)), /*#__PURE__*/React.createElement("span", {
    className: "tooltip"
  }, navItem.name)))), /*#__PURE__*/React.createElement("div", {
    className: "profile_content bg--primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile_details"
  }, /*#__PURE__*/React.createElement(reactRouterDom.NavLink, {
    to: "/profile"
  }), /*#__PURE__*/React.createElement("div", {
    className: "name_job"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, user?.displayName), rol && /*#__PURE__*/React.createElement("div", {
    className: "job"
  }, rol))), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-sign-out-alt",
    id: "log_out",
    onClick: logout
  }))));
};

/*
<a href='https://faqtoff.com' target='_blank' rel='noreferrer'>
    <img src={Img1} alt=''/>
    <div className='text-slide'>
        <p>hola</p>
    </div>
</a>
*/

const Slideshow = ({
  children
}) => {
  const slideshow = React.useRef(null);
  const intervaloSlideshow = React.useRef(null);
  const siguiente = () => {
    if (slideshow.current?.children.length > 0) {
      const firstElement = slideshow.current?.children[0];
      slideshow.current.style.transition = `5000ms ease-out all`;
      const slideSize = slideshow.current?.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;
      const transition = () => {
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = 'translateX(0)';
        slideshow.current.appendChild(firstElement);
        slideshow.current.removeEventListener('transitionend', transition);
      };
      slideshow.current.addEventListener('transitionend', transition);
    }
  };
  const anterior = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[index];
      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);
      slideshow.current.style.transition = 'none';
      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;
      setTimeout(() => {
        slideshow.current.style.transition = `5000ms ease-out all`;
        slideshow.current.style.transform = 'translateX(0)';
      }, 30);
    }
  };
  React.useEffect(() => {
    intervaloSlideshow.current = setInterval(() => {
      siguiente();
    }, 5000);
    slideshow.current.addEventListener('mouseenter', () => {
      clearInterval(intervaloSlideshow.current);
    });
    slideshow.current.addEventListener('mouseleave', () => {
      intervaloSlideshow.current = setInterval(() => {
        siguiente();
      }, 5000);
    });
    return;
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "slider--auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slideshow",
    ref: slideshow
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "slide__controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "slide__button",
    onClick: anterior
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-left"
  })), /*#__PURE__*/React.createElement("button", {
    className: "slide__button",
    onClick: siguiente
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-right"
  }))));
};

const Spinner = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "spinner full-height"
  });
};

/* This is a React component that receives a data object with headers and items. */
const Table = props => {
  const {
    headers,
    items,
    className,
    name,
    id
  } = props;
  const [order, setOrder] = React.useState('');
  const handleFilters = field => {
    if (order === field) setOrder('');
    setOrder(field);
  };
  const orderBy = (field, list) => {
    const sortByField = (a, b) => {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    };
    if (!list) return [];
    return list?.sort(sortByField);
  };
  return /*#__PURE__*/React.createElement("table", {
    className: className || 'primaryGridTable',
    id: id
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, headers?.map(header => {
    return /*#__PURE__*/React.createElement("th", {
      key: `${header.field}_${name}`,
      onClick: () => handleFilters(header.field)
    }, header.name);
  }))), /*#__PURE__*/React.createElement("tbody", null, orderBy(order, items)?.map(item => {
    return /*#__PURE__*/React.createElement("tr", {
      key: `${item.id}_${name}`
    }, headers?.map((header, index) => {
      if (index === 0) return /*#__PURE__*/React.createElement("th", {
        scope: "row",
        key: `${header.field}_${item.id}_${name}`
      }, item[header.field]);
      return /*#__PURE__*/React.createElement("td", {
        key: `${header.field}_${item.id}_${name}`
      }, item[header.field]);
    }));
  })));
};

const FormInput = ({
  required,
  label,
  type,
  name,
  id,
  defaultValue,
  disabled,
  className,
  value,
  onChange,
  readOnly
}) => {
  const labelProps = {
    htmlFor: name || '',
    className: `form__label ${className?.label || ''}`
  };
  const commonProps = {
    type: type || 'text',
    name: name || '',
    id: id || '',
    disabled,
    value,
    onChange,
    readOnly,
    required
  };
  const textAreaProps = {
    ...commonProps,
    defaultValue: defaultValue || ``,
    className: `form__group__textarea ${className?.textarea || ''}`
  };
  const inputProps = {
    ...commonProps,
    defaultValue: defaultValue || ``,
    defaultChecked: defaultValue,
    className: `form__group__input ${className?.input || ''}`
  };
  const checkBox = {
    ...commonProps,
    defaultChecked: defaultValue || false,
    className: `form__group__input ${className?.input || ''}`
  };
  if (type === 'checkbox') return /*#__PURE__*/React.createElement("div", {
    className: `form__group`
  }, /*#__PURE__*/React.createElement("label", labelProps, label), /*#__PURE__*/React.createElement("input", checkBox));
  return /*#__PURE__*/React.createElement("div", {
    className: `form__group ${className?.group || ''}`
  }, /*#__PURE__*/React.createElement("label", labelProps, label), type === 'textarea' ? /*#__PURE__*/React.createElement("textarea", textAreaProps) : /*#__PURE__*/React.createElement("input", inputProps));
};

/* A React component that is a select input. */
const FormSelect = ({
  value,
  name,
  className,
  label,
  defaultValue,
  disabled,
  id,
  options,
  onChange,
  required,
  multiple
}) => {
  const labelProps = {
    htmlFor: name || '',
    className: `form__label ${className?.label || ''}`
  };
  const selectProps = {
    defaultValue: defaultValue || ``,
    name: name || '',
    id: id || '',
    className: `form__group__textarea p--1 ${className?.select || ''}`,
    disabled,
    onChange,
    value,
    required,
    multiple
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "form__group"
  }, /*#__PURE__*/React.createElement("label", labelProps, " ", label, " "), /*#__PURE__*/React.createElement("select", selectProps, !defaultValue && /*#__PURE__*/React.createElement("option", {
    className: "m--1",
    defaultValue: true,
    selected: true,
    disabled: true,
    hidden: true
  }, "Seleccionar una opcion"), options?.map((option, index) => {
    const optionProps = {
      key: `${option.value}_${name}_${index}`,
      value: `${option.value || index}`
    };
    return /*#__PURE__*/React.createElement("option", _extends({
      className: "m--1"
    }, optionProps), option.name || option.description);
  })));
};

exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.Footer = Footer;
exports.FormInput = FormInput;
exports.FormSelect = FormSelect;
exports.Modal = Modal;
exports.ModalButtonWrapper = ModalButtonWrapper;
exports.Navbar = Navbar;
exports.Sidebar = Sidebar;
exports.Slideshow = Slideshow;
exports.Spinner = Spinner;
exports.Table = Table;
exports.TooltipIconLabel = TooltipIconLabel;
