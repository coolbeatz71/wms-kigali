import slugify from "@sindresorhus/slugify";

const createSlug = word => {
  const slug = `${slugify(word)}-${Math.floor(Math.random() * 999999999) +
    100000000}`;
  return slug;
};

export default createSlug;
