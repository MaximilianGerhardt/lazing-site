type SchemaJsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function SchemaJsonLd({ data }: SchemaJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
