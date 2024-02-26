import { graph, auth, config } from "@grafbase/sdk";

const g = graph.Standalone();

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

const User = g.type("User", {
  name: g.string(),
  id: g.id(),
  email: g.email(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  // projects: g.relation(Project).list().optional(),
});

export default config({
  graph: g,
});
