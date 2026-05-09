type ResendContactProperty = {
  type: "string" | "number";
  value: string | number;
};

type ResendContactProperties = Record<string, ResendContactProperty | undefined>;

export function contactProperty(
  properties: ResendContactProperties | undefined,
  key: string,
  fallback = "",
) {
  const property = properties?.[key];

  if (!property) return fallback;

  return String(property.value ?? fallback);
}

export function contactPropertiesToValues(properties: ResendContactProperties | undefined) {
  const values: Record<string, string | number> = {};

  Object.entries(properties ?? {}).forEach(([key, property]) => {
    if (property?.value !== undefined) {
      values[key] = property.value;
    }
  });

  return values;
}
