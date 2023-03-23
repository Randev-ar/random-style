'use strict';

var React = require('react');
var reactRouterDom = require('react-router-dom');

const Breadcrum = () => {
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
    className: "conteiner breadcrumb__list"
  }, pathName?.map(path => {
    if (path !== '') {
      route = `${route}/${path}`;
    }
    return /*#__PURE__*/React.createElement("li", {
      className: "breadcrumb__list__item",
      key: `path${path}`
    }, path === '' && /*#__PURE__*/React.createElement(reactRouterDom.NavLink, {
      to: "/"
    }, "Home"), path !== '' && /*#__PURE__*/React.createElement(reactRouterDom.NavLink, {
      to: `${route}`
    }, "/ ", path.replaceAll('-', ' ')));
  })));
};

const Footer = () => {
  const linkedin = process.env.REACT_APP_SOCIAL_LINKEDING;
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
  }, "dev"))), /*#__PURE__*/React.createElement("br", null), "\xA92021 - Random Development")));
};

const Spinner = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "spinner full-height"
  });
};

const Sidebar = ({
  user,
  logout,
  rol,
  style,
  navList
}) => {
  let titulo = process.env.REACT_APP_WEBSITE_NAME;
  const [active, setActive] = React.useState(false);
  return /*#__PURE__*/React.createElement("aside", {
    className: `sidebar ${active && 'active'}  ${user === null && 'd--none'}`,
    style: style && style.sidebar
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo_content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo",
    style: style && style.logo
  }, titulo && /*#__PURE__*/React.createElement("div", {
    className: "logoname"
  }, titulo)), /*#__PURE__*/React.createElement("i", {
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

const Modal = props => {
  let {
    visible,
    children,
    onClose,
    bgClose,
    className,
    style
  } = props;
  const onModalClick = e => {
    e.stopPropagation();
  };
  const onCloseHandler = () => {
    onClose && onClose();
  };
  const onBgClick = () => {
    bgClose && onCloseHandler();
  };
  return visible ? /*#__PURE__*/React.createElement("div", {
    className: "modal__overlay ",
    onClick: onBgClick
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
  }, children))) : null;
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
  const onButtonClick = () => {
    setVisible(true);
  };
  const onClose = () => {
    open = false;
    setVisible(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal__buttonWrapper ",
    onSubmit: onButtonClick
  }, /*#__PURE__*/React.createElement("button", {
    className: className,
    onClick: onButtonClick,
    type: "button"
  }, /*#__PURE__*/React.createElement("span", null, buttonText)), /*#__PURE__*/React.createElement(Modal, {
    visible: visible,
    alCerrar: alCerrar,
    className: classNameM,
    onClose: onClose,
    bgClose: bgClose
  }, children));
};

exports.Breadcrum = Breadcrum;
exports.Footer = Footer;
exports.Modal = Modal;
exports.ModalButtonWrapper = ModalButtonWrapper;
exports.Sidebar = Sidebar;
exports.Spinner = Spinner;
