import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from './services/actions/todosAction';

const Todos = () => {
      const {isLoading,todos,error} = useSelector((state)=>state);
      console.log(todos);
      const dispatch = useDispatch();

      useEffect(()=>{
            dispatch(getAllTodos())
      },[])
      return (
            <div>
                  <h3 className='text-red-900 text-center text-2xl'>todos app</h3>
                  {isLoading && <h3>Loading...</h3>}
                  {error && <h3>{error.message}</h3>}
                  <section className='grid grid-cols-3 gap-3 p-[24px]'>
                        {
                              todos && todos.map((todo)=>{
                                    return(
                                          <article key={todo.id} className='bg-[#293462] text-white p-[16px]'>
                                                <h4>{todo.id}</h4>
                                                <h4>{todo.title}</h4>
                                          </article>
                                    )
                              })
                        }
                  </section>
            </div>
      );
};

export default Todos;