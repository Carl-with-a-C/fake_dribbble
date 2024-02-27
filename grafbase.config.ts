import { graph, auth, config } from "@grafbase/sdk";

const g = graph.Standalone();

const User = g.type("User", {
  id: g.id(),
  first_name: g.string(),
  last_name: g.string(),
  full_name: g.string(),
  email: g.email(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  // projects: g
  //   .relation(() => Project)
  //   .list()
  //   .optional(),
});
const Project = () => {
  return g.type("Project", {
    title: g.string(),
    description: g.string().optional(),
    image: g.url(),
    liveSiteUrl: g.url(),
    githubUrl: g.url(),
    category: g.string(),
    createdBy: g.ref(User),
  });
};

export default config({
  graph: g,
});
