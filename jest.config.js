module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy"
  },
  testPathIgnorePatterns: ["__tests__/__mocks__/*"],
  verbose: true,
};



