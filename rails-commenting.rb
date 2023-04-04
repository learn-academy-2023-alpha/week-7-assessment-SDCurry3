# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController  #defines the class BlogPostController, which inherits its properties from appllication controller. next line defines the method called 'index'.
  def index  
    # ---2)
    @posts = BlogPost.all   #assigns all instances of the BlogPost model to an instance variable called @posts.
  end

  # ---3)
  def show   # defines the method 'show'
    @post = BlogPost.find(params[:id])   # this lets you find a specific instance of "BlogPost" by calling its unique id.
  end

  # ---4)
  def new   # defines the method 'new'
    @post = BlogPost.new   # initializes a new instance of the BlogPost model and assigns it to an instance variable called @post.
  end

  def create
    # ---5)   this will attempt to create an instance of BlogPost, and redirecting the user to a page displaying that post if the request meets the requirements listed in blog_post_params down at the bottom of the page.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)   code's formatted the same as show, but performs a different CRUD action. in this case, it's used to call up a particular instance of BlogPost for updating. speaking of which...
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)   ...that's what this one's for! if the updated BlogPost meets the required conditions in blog_post_params, itt'l toss the user to the page displaying the post that was edited. Curiously, neither create nor this one have an 'else' statement for if the check fails. Hope the form that we can't see has proper failsafes built in!
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)   takes the post (database entry) matching the given unique id and throws it in a volcano.
      redirect_to blog_posts_path   #                   ***I could use some extra clarification on what's up with blog_posts_path. My understanding is that it's essentially leading back to the 'index', and is a name automatically generated when the controller is first created, but I feel like i'm missing something here...***
    end
  end

  # ---9) creates a "private" method (blog_post_params) only reachable in this class. kinda like defining a local-scope variable in Javascript, I think. 
  private
  def blog_post_params
    # ---10) these are the parameters that a few of the methods above are checking against. if anything being checked doesn't have the :blog_post key, then it fails. the :title and :content keys are technically optional.
    params.require(:blog_post).permit(:title, :content)
  end
end
