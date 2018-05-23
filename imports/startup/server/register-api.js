import { makeExecutableSchema } from "graphql-tools";
import { createApolloServer } from "meteor/apollo";
import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";
import merge from 'lodash/merge';
//jaskdjkkasdsadkyuyukkurkurukyjkhgfgmjkjkjhk
import ResolutionResolvers from "../../api/resolutions/resolvers";

const testSchema=`
type Query{
  hi:String
  resolutions:[Resolution]
}`;

const typeDefs=[
  testSchema,
  ResolutionsSchema
];
const testResolvers={
  Query:{
    hi(){
      return "hello world from Meteor via apollo";
    },
    // resolutions(){
    //   return [{
    //     _id:"algoalgo",
    //     name:"just do it"
    //   }];
    // }
  }
};
const resolvers = merge(testResolvers,ResolutionResolvers)

const schema=makeExecutableSchema({
  typeDefs,
  resolvers
})
createApolloServer({schema});
