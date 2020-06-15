<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;


class HomeController extends AbstractController
{

    /**
     * @Route("/")
     */
    public function index(){


        return $this->render('home.html.twig');
    }


   /**
    * @Route("/search", name="search", methods={"GET","POST"})
    */
    public function search(Request $request){

        $search = $request->request->get('search');
        if($search){
            $api = "https://fr.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&titles=".ucwords($search)."&redirects=true";
            $api = str_replace(' ','%20',$api);

            if($data = json_decode(@file_get_contents($api))){
                foreach($data->query->pages as $key=>$val){
                    $pageId = $key;
                break;
                }
                $content = $data->query->pages->$pageId->extract;

            } else {
                echo 'No contents found';
            }
        
            
            $api_url = "https://fr.wikipedia.org/w/api.php?action=query&formatversion=2&format=json&prop=pageimages|pageterms&piprop=original&piprop=thumbnail&pithumbsize=400&pilicense=any&titles=".ucwords($search);
            $api_url = str_replace(' ','%20',$api_url);

            if($data = json_decode(@file_get_contents($api_url))){

                foreach ($data->query->pages as $pages){

                    $image = $pages->thumbnail->source;
                    $title = $pages->title;
                 }
            } else {
                echo 'No images found';
            }

            return $this->render('article.html.twig', [
                'content' => $content,
                'image'   => $image,
                'title'   => $title
            ]);
        } else {
            echo 'No results found';
        }
            return $this->render('home.html.twig');
    }
}
      