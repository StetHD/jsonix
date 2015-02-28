var Zero = {
	name: "Zero",
	typeInfos: [{
			type: "classInfo",
			localName: "AnyElementStrictType",
			propertyInfos: [{
					name: "any",
					typedObjectAllowed: true,
					type: "anyElement"
				}]
		}, {
			type: "classInfo",
			localName: "ElementType",
			propertyInfos: [{
					type: "element",
					name: "element",
					elementName: "element",
					typeInfo: "String"
				}, {
					type: "element",
					name: "elements",
					collection: true,
					elementName: "elements",
					typeInfo: "String"
				}, {
					type: "element",
					name: "item",
					elementName: "item",
					typeInfo: {
						type: "list",
						typeInfo: "String"
					}
				}, {
					name: "items",
					collection: true,
					elementName: "items",
					typeInfo: {
						type: "list",
						typeInfo: "String"
					},
					type: "elementRef"
				}]
		}, {
			type: "classInfo",
			localName: "ElementMapType",
			propertyInfos: [{
					name : "element",
					type : "elementMap",
					key : { name : "key", type : "attribute" },
					value : { name : "value", type : "value" }
				}, {
					name : "elementCollection",
					type : "elementMap",
					collection : true,
					key : { name : "key", type : "attribute" },
					value : { name : "value", type : "value" }
				}, {
					name : "elements",
					type : "elementMap",
					wrapperElementName : "elements",
					elementName : "element",
					key : { name : "key", type : "attribute" },
					value : { name : "value", type : "value" }
				}, {
					name : "elementsCollection",
					type : "elementMap",
					wrapperElementName : "elementsCollection",
					elementName : "element",
					collection : true,
					key : { name : "key", type : "attribute" },
					value : { name : "value", type : "value" }
				}]
		}, {
			type: "classInfo",
			localName: "AnyElementSkipType",
			propertyInfos: [{
					name: "any",
					domAllowed: true,
					type: "anyElement"
				}]
		}, {
			type: "classInfo",
			localName: "ExtendedType",
			baseTypeInfo: "Zero.BaseType",
			propertyInfos: [{
					type: "element",
					name: "gamma",
					elementName: "gamma",
					typeInfo: "String"
				}, {
					type: "element",
					name: "delta",
					collection: true,
					elementName: "delta",
					typeInfo: "Calendar"
				}]
		}, {
			type: "classInfo",
			localName: "BaseType",
			propertyInfos: [{
					type: "element",
					name: "alpha",
					elementName: "alpha",
					typeInfo: "String"
				}, {
					type: "element",
					name: "beta",
					collection: true,
					elementName: "beta",
					typeInfo: "Integer"
				}]
		}, {
			type: "classInfo",
			localName: "AttributeType",
			propertyInfos: [{
					name: "value",
					typeInfo: "String",
					type: "value"
				}, {
					name: "string",
					typeInfo: "String",
					attributeName: "string",
					type: "attribute"
				}, {
					name: "integers",
					typeInfo: {
						type: "list",
						typeInfo: "Integer"
					},
					attributeName: "integers",
					type: "attribute"
				}]
		}, {
			type: "classInfo",
			localName: "AnyAttributeType",
			propertyInfos: [{
					name: "otherAttributes",
					type: "anyAttribute"
				}, {
					name: "value",
					typeInfo: "String",
					type: "value"
				}]
		}, {
			type: "classInfo",
			localName: "ElementRefType",
			propertyInfos: [{
					name: "base",
					collection: true,
					elementName: "base",
					typeInfo: "Zero.BaseType",
					type: "elementRef"
				}]
		}, {
			type: "classInfo",
			localName: "AnyElementLaxType",
			propertyInfos: [{
					name: "any",
					domAllowed: true,
					typedObjectAllowed: true,
					type: "anyElement"
				}]
		}, {
			type: "classInfo",
			localName: "ElementRefMixedType",
			propertyInfos: [{
					name: "content",
					collection: true,
					mixed: true,
					elementName: "value",
					typeInfo: "String",
					type: "elementRef"
				}]
		}, {
			type: "classInfo",
			localName: "ElementRefsType",
			propertyInfos: [{
					name: "alphaOrBeta",
					collection: true,
					elementTypeInfos: [{
							elementName: "beta",
							typeInfo: "Zero.ValueType"
						}, {
							elementName: "alpha",
							typeInfo: "Zero.ValueType"
						}],
					type: "elementRefs"
				}]
		}, {
			type: "classInfo",
			localName: "SimpleTypesType",
			propertyInfos: [{
					type: "element",
					name: "base64Binary",
					elementName: "base64Binary",
					typeInfo: "Base64Binary"
				}, {
					type: "element",
					name: "hexBinary",
					elementName: "hexBinary",
					typeInfo: "String"
				}, {
					type: "element",
					name: "duration",
					elementName: "duration",
					typeInfo: "String"
				}, {
					type: "element",
					name: "dateTime",
					elementName: "dateTime",
					typeInfo: "Calendar"
				}, {
					type: "element",
					name: "date",
					elementName: "date",
					typeInfo: "Calendar"
				}, {
					type: "element",
					name: "time",
					elementName: "time",
					typeInfo: "Calendar"
				}, {
					type: "element",
					name: "gYearMonth",
					elementName: "gYearMonth",
					typeInfo: "Calendar"
				}, {
					type: "element",
					name: "gYear",
					elementName: "gYear",
					typeInfo: "Calendar"
				}, {
					type: "element",
					name: "gMonthDay",
					elementName: "gMonthDay",
					typeInfo: "Calendar"
				}, {
					type: "element",
					name: "gDay",
					elementName: "gDay",
					typeInfo: "Calendar"
				}, {
					type: "element",
					name: "gMonth",
					elementName: "gMonth",
					typeInfo: "Calendar"
				}, {
					type: "element",
					name: "_float",
					elementName: "float",
					typeInfo: "Float"
				}, {
					type: "element",
					name: "_double",
					elementName: "double",
					typeInfo: "Double"
				}, {
					type: "element",
					name: "decimal",
					elementName: "decimal",
					typeInfo: "Decimal"
				}, {
					type: "element",
					name: "integer",
					elementName: "integer",
					typeInfo: "Integer"
				}, {
					type: "element",
					name: "_long",
					elementName: "long",
					typeInfo: "Long"
				}, {
					type: "element",
					name: "_int",
					elementName: "int",
					typeInfo: "Int"
				}, {
					type: "element",
					name: "_short",
					elementName: "short",
					typeInfo: "Short"
				}, {
					type: "element",
					name: "_byte",
					elementName: "byte",
					typeInfo: "Byte"
				}, {
					type: "element",
					name: "unsignedLong",
					elementName: "unsignedLong",
					typeInfo: "Integer"
				}, {
					type: "element",
					name: "unsignedInt",
					elementName: "unsignedInt",
					typeInfo: "Long"
				}, {
					type: "element",
					name: "unsignedShort",
					elementName: "unsignedShort",
					typeInfo: "Int"
				}, {
					type: "element",
					name: "unsignedByte",
					elementName: "unsignedByte",
					typeInfo: "Short"
				}, {
					type: "element",
					name: "nonNegativeInteger",
					elementName: "nonNegativeInteger",
					typeInfo: "Integer"
				}, {
					type: "element",
					name: "nonPositiveInteger",
					elementName: "nonPositiveInteger",
					typeInfo: "Integer"
				}, {
					type: "element",
					name: "positiveInteger",
					elementName: "positiveInteger",
					typeInfo: "Integer"
				}, {
					type: "element",
					name: "negativeInteger",
					elementName: "negativeInteger",
					typeInfo: "Integer"
				}, {
					type: "element",
					name: "_boolean",
					elementName: "boolean",
					typeInfo: "Boolean"
				}, {
					type: "element",
					name: "anyURI",
					elementName: "anyURI",
					typeInfo: "String"
				}, {
					type: "element",
					name: "qName",
					elementName: "QName",
					typeInfo: "QName"
				}, {
					type: "element",
					name: "string",
					elementName: "string",
					typeInfo: "String"
				}, {
					type: "element",
					name: "normalizedString",
					elementName: "normalizedString",
					typeInfo: "String"
				}, {
					type: "element",
					name: "token",
					elementName: "token",
					typeInfo: "String"
				}, {
					type: "element",
					name: "language",
					elementName: "language",
					typeInfo: "String"
				}, {
					type: "element",
					name: "name",
					elementName: "Name",
					typeInfo: "String"
				}, {
					type: "element",
					name: "ncName",
					elementName: "NCName",
					typeInfo: "String"
				}, {
					type: "element",
					name: "id",
					elementName: "ID",
					typeInfo: "ID"
				}, {
					type: "element",
					name: "idref",
					elementName: "IDREF",
					typeInfo: "IDREF"
				}, {
					type: "element",
					name: "idrefs",
					elementName: "IDREFS",
					typeInfo: "IDREFS"
				}, {
					type: "element",
					name: "entity",
					elementName: "ENTITY",
					typeInfo: "String"
				}, {
					type: "element",
					name: "entities",
					elementName: "ENTITIES",
					typeInfo: {
						type: "list",
						typeInfo: "String"
					}
				}, {
					type: "element",
					name: "nmtoken",
					elementName: "NMTOKEN",
					typeInfo: "String"
				}, {
					type: "element",
					name: "nmtokens",
					elementName: "NMTOKENS",
					typeInfo: {
						type: "list",
						typeInfo: "String"
					}
				}]
		}, {
			type: "classInfo",
			localName: "ValueType",
			propertyInfos: [{
					name: "value",
					typeInfo: "String",
					type: "value"
				}, {
					name: "attribute",
					typeInfo: "String",
					attributeName: "attribute",
					type: "attribute"
				}]
		}, {
			type: "classInfo",
			localName: "ExtendedExtendedType",
			baseTypeInfo: "Zero.ExtendedType",
			propertyInfos: [{
					type: "element",
					name: "epsilon",
					elementName: "epsilon",
					typeInfo: "Double"
				}, {
					type: "element",
					name: "zeta",
					collection: true,
					elementName: "zeta",
					typeInfo: "Decimal"
				}]
		}, {
			type: "classInfo",
			localName: "ElementsType",
			propertyInfos: [{
					name: "stringOrInteger",
					collection: true,
					elementTypeInfos: [{
							elementName: "string",
							typeInfo: "String"
						}, {
							elementName: "integer",
							typeInfo: "Integer"
						}],
					type: "elements"
				}]
		}, {
			type: "classInfo",
			localName: "ExtendedMixedType",
			baseTypeInfo: "Zero.AbstractBaseType",
			propertyInfos: []
		}, {
			type: "classInfo",
			localName: "AbstractBaseType",
			propertyInfos: []
		}],
	elementInfos: [{
			elementName: "anyElementStrict",
			typeInfo: "Zero.AnyElementStrictType"
		}, {
			elementName: "element",
			typeInfo: "Zero.ElementType"
		}, {
			elementName: "elementMap",
			typeInfo: "Zero.ElementMapType"
		}, {
			elementName: "anyElementSkip",
			typeInfo: "Zero.AnyElementSkipType"
		}, {
			elementName: "extended",
			typeInfo: "Zero.ExtendedType",
			substitutionHead: "base"
		}, {
			elementName: "attribute",
			typeInfo: "Zero.AttributeType"
		}, {
			elementName: "enum",
			typeInfo: "String"
		}, {
			elementName: "anyAttribute",
			typeInfo: "Zero.AnyAttributeType"
		}, {
			elementName: "abstractElement",
			typeInfo: "AnyType"
		}, {
			elementName: "elementRef",
			typeInfo: "Zero.ElementRefType"
		}, {
			elementName: "anyElementLax",
			typeInfo: "Zero.AnyElementLaxType"
		}, {
			elementName: "elementRefMixed",
			typeInfo: "Zero.ElementRefMixedType"
		}, {
			elementName: "elementRefs",
			typeInfo: "Zero.ElementRefsType"
		}, {
			elementName: "string",
			typeInfo: "String"
		}, {
			elementName: "value",
			typeInfo: "Zero.ValueType"
		}, {
			elementName: "simpleTypes",
			typeInfo: "Zero.SimpleTypesType"
		}, {
			elementName: "base",
			typeInfo: "Zero.BaseType"
		}, {
			elementName: "elements",
			typeInfo: "Zero.ElementsType"
		}, {
			elementName: "extendedExtended",
			typeInfo: "Zero.ExtendedExtendedType",
			substitutionHead: "base"
		}, {
			elementName: "alpha",
			typeInfo: "Zero.ValueType",
			scope: "Zero.ElementRefsType"
		}, {
			elementName: "beta",
			typeInfo: "Zero.ValueType",
			scope: "Zero.ElementRefsType"
		}, {
			elementName: "value",
			typeInfo: "String",
			scope: "Zero.ElementRefMixedType"
		}, {
			elementName: "items",
			typeInfo: {
				type: "list",
				typeInfo: "String"
			},
			scope: "Zero.ElementType"
		}]
};
if (typeof require === "function") {
	module.exports.Zero = Zero;
}