class Style {
  constructor({ property, value }) {
    this.property = property;
    this.value = value;
  }
}

HTMLElement.prototype.setStyle = function (styleData) {
  let data = [];
  let styles = [];
  let style = [];

  if (styleData || typeof styleData === "string") {
    for (const style of styleData.trim().split(";")) {
      if (style) {
        data.push(style.replace(/(\r\n|\n|\r)/gm, ""));
      }
    }

    for (const styleDeclaration of data) {
      let propertyValuePair = styleDeclaration.split(":");
      let propertyValue = {
        property: propertyValuePair[0].trim().toLowerCase(),
        value: propertyValuePair[1].trim().toLowerCase(),
      };
      styles.push(propertyValue);
    }

    if (styles.length) {
      for (const declaration of styles) {
        let propertyWords = declaration.property.split("-");
        let property = "";

        if (propertyWords.length === 1) {
          property = propertyWords[0].toString();
        } else {
          property += propertyWords[0].toString();
          for (let i = 1; i < propertyWords.length; i++) {
            property += propertyWords[i].toString().charAt(0).toUpperCase();
            property += propertyWords[i].toString().slice(1).toLowerCase();
          }
        }

        let propVal = {
          property,
          value: declaration.value,
        };

        style.push(new Style(propVal));
      }
    }

    for (const s of style) {
      this.style[s.property] = s.value;
    }
  } else {
    throw Error("The function setStyle requires a valid CSS as an argument");
  }
};
